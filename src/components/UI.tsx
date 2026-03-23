import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue/90 glow-blue",
    secondary: "bg-brand-gold text-black hover:bg-brand-gold/90 glow-gold",
    outline: "border border-white/20 hover:bg-white/5 text-white",
    ghost: "text-white/70 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Card = ({ className, children, delay = 0 }: { className?: string, children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={cn("glass rounded-3xl p-8", className)}
  >
    {children}
  </motion.div>
);

export const Section = ({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) => (
  <section id={id} className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border border-brand-blue/30 bg-brand-blue/10 text-brand-blue inline-block mb-4", className)}>
    {children}
  </span>
);
