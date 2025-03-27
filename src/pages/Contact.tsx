
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* En-tête */}
        <section className="bg-primary text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl max-w-3xl">
              Nous sommes impatients d'échanger avec vous et de vous aider dans votre transformation par l'IA.
            </p>
          </div>
        </section>

        {/* Formulaire et infos de contact */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <p className="text-secondary mb-8">
                  Que vous souhaitiez en savoir plus sur nos services, discuter d'un projet ou simplement échanger, 
                  n'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
                </p>
                
                <ContactForm source={1} />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                <p className="text-secondary mb-8">
                  Si vous préférez nous contacter directement, voici nos coordonnées. 
                  Nous sommes disponibles du lundi au vendredi, de 9h à 18h.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-secondary">contact@viadex.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-secondary">
                        123 Avenue de l'Innovation<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">Prenez rendez-vous</h3>
                  <p className="text-secondary mb-4">
                    Préférez-vous un échange en direct ? Réservez un créneau de 30 minutes 
                    avec l'un de nos experts pour discuter de vos besoins spécifiques.
                  </p>
                  <Link to="/calendrier" className="block w-full py-3 bg-primary text-white text-center rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Réserver un créneau
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[{
              question: "Comment se déroule un premier échange ?",
              answer: "Lors d'un premier échange, nous prenons le temps de comprendre votre entreprise, vos besoins et vos objectifs. C'est un échange sans engagement, qui nous permet d'évaluer comment nous pouvons vous aider et vous donner un premier aperçu des possibilités."
            }, {
              question: "Quels sont vos tarifs ?",
              answer: "Nos tarifs varient en fonction de vos besoins spécifiques et de l'ampleur de l'accompagnement. Nous privilégions une approche transparente et sur mesure. Contactez-nous pour recevoir un devis personnalisé."
            }, {
              question: "Travaillez-vous avec des entreprises de toute taille ?",
              answer: "Oui, nous travaillons principalement avec des PME, TPE et ETI, mais notre approche s'adapte à toutes les tailles d'entreprise. Notre objectif est de rendre l'IA accessible à tous, quelle que soit la taille de votre structure."
            }, {
              question: "Combien de temps dure un accompagnement typique ?",
              answer: "La durée d'un accompagnement varie selon vos objectifs. Un diagnostic peut être réalisé en quelques semaines, tandis qu'un accompagnement complet peut s'étendre sur plusieurs mois. Nous définissons ensemble un calendrier adapté à vos contraintes."
            }].map((faq, index) => <div key={index} className="bg-background rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-secondary">{faq.answer}</p>
                </div>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Contact;
