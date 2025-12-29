import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '96170123456';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your perfumes.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white 
                 shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 
                 hover:scale-110 transition-all duration-300 flex items-center justify-center group
                 animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-card text-foreground px-4 py-2 rounded-lg text-sm 
                       whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 
                       shadow-lg border border-border/50 transform translate-x-2 group-hover:translate-x-0">
        Chat with us
      </span>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </button>
  );
};

export default WhatsAppButton;