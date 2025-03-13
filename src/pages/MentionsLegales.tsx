
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-primary">Mentions Légales</h1>
          
          <div className="space-y-6 text-secondary">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Informations légales</h2>
              <p>
                Le site Viadex est édité par la société Viadex, SAS au capital de 10 000 €, 
                immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789,
                dont le siège social est situé au 123 Rue de l'Innovation, 75001 Paris.
              </p>
              <p className="mt-2">
                Numéro de TVA intracommunautaire : FR 12 345 678 901
              </p>
              <p className="mt-2">
                Directeur de la publication : Jean Dupont
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Hébergement</h2>
              <p>
                Le site Viadex est hébergé par la société Hosting Provider, 
                SAS au capital de 50 000 €, immatriculée au RCS de Paris sous le numéro 987 654 321,
                dont le siège social est situé au 456 Avenue du Web, 75002 Paris.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments constituant le site Viadex (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) 
                ainsi que le site lui-même, sont la propriété exclusive de Viadex ou des titulaires de droits avec lesquels Viadex a conclu des accords d'utilisation.
              </p>
              <p className="mt-2">
                Ces éléments sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, 
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Viadex.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Données personnelles</h2>
              <p>
                Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à Viadex pour la gestion de sa clientèle et la prospection commerciale.
              </p>
              <p className="mt-2">
                Conformément à la loi « Informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d'un droit d'accès, de rectification et de suppression des informations qui vous concernent, 
                que vous pouvez exercer en vous adressant à Viadex, 123 Rue de l'Innovation, 75001 Paris ou par email à dpo@viadex.fr.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
              <p>
                Le site Viadex utilise des cookies pour améliorer l'expérience utilisateur et proposer des contenus personnalisés.
                Un cookie est un petit fichier texte enregistré sur votre terminal lors de la visite d'un site web.
              </p>
              <p className="mt-2">
                Vous pouvez configurer votre navigateur pour refuser l'utilisation de cookies. Cependant, certaines fonctionnalités du site pourraient ne plus être accessibles.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;
