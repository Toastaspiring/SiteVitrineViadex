
import { useState } from "react";
import { Button } from "./ui/button";

const ContactForm = ({ isShort = false }) => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    entreprise: "",
    telephone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    // Ici, vous pourriez ajouter le code pour envoyer le formulaire
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    setFormData({
      nom: "",
      email: "",
      message: "",
      entreprise: "",
      telephone: ""
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${isShort ? "w-full" : "max-w-md w-full"}`}>
      <h3 className="text-xl font-bold mb-4">
        {isShort ? "Obtenez un premier échange gratuit" : "Contactez-nous"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-secondary mb-1">
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        {!isShort && (
          <>
            <div>
              <label htmlFor="entreprise" className="block text-sm font-medium text-secondary mb-1">
                Entreprise
              </label>
              <input
                id="entreprise"
                name="entreprise"
                type="text"
                value={formData.entreprise}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-secondary mb-1">
                Téléphone
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </>
        )}
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={isShort ? 2 : 4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div>
          <Button type="submit" className="w-full bg-primary text-white">
            {isShort ? "Obtenir un échange gratuit" : "Envoyer ma demande"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
