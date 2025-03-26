
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/home/ui/dialog";
import { Input } from "@/components/home/ui/input";
import { Button } from "@/components/home/ui/button";
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// This component is kept for backward compatibility but is disabled
export function LoginModal({
  isOpen,
  onClose
}: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Disabled functionality
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login functionality disabled");
  };

  // Always return null to prevent rendering
  return null;
}
