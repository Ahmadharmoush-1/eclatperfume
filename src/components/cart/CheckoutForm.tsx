import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const WHATSAPP_NUMBER = '96170123456';

interface CheckoutFormProps {
  onBack: () => void;
}

const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, totalPrice, clearCart, setIsCartOpen } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.city.trim()) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const orderItems = items
      .map((item) => `• ${item.name} x${item.quantity} - $${item.price * item.quantity}`)
      .join('\n');

    const message = `
🌟 *New Order from Eclat Parfum* 🌟

*Customer Details:*
📛 Name: ${formData.name}
📱 Phone: ${formData.phone}
📍 City/Area: ${formData.city}
${formData.notes ? `📝 Notes: ${formData.notes}` : ''}

*Order Details:*
${orderItems}

💰 *Total: $${totalPrice}*

Thank you for your order!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart and close drawer
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      setIsSubmitting(false);
      toast({
        title: 'Order Sent!',
        description: 'Your order has been sent via WhatsApp. We will contact you shortly.',
      });
    }, 500);
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </button>

      <div>
        <h3 className="font-serif text-xl font-semibold mb-1">Checkout</h3>
        <p className="text-muted-foreground text-sm">
          Complete your order details to send via WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="bg-muted border-border"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+961 XX XXX XXX"
            className="bg-muted border-border"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium">
            City / Area <span className="text-destructive">*</span>
          </label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g., Beirut, Tripoli, Jounieh"
            className="bg-muted border-border"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="text-sm font-medium">
            Notes (Optional)
          </label>
          <Textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special instructions..."
            className="bg-muted border-border resize-none"
            rows={3}
          />
        </div>

        {/* Order Summary */}
        <div className="glass-card rounded-lg p-4 space-y-2">
          <h4 className="font-medium text-sm">Order Summary</h4>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm text-muted-foreground">
              <span>{item.name} x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-gold">${totalPrice}</span>
          </div>
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          <Send className="h-4 w-4 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send Order via WhatsApp'}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
