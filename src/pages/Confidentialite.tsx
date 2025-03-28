
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-primary">Politique de Confidentialité</h1>
          
          <div className="space-y-6 text-secondary">
            <section>
              <p className="italic">
                Dernière mise à jour : 28 Mars 2025
              </p>
              <p className="mt-4">
                Viadex s'engage à protéger vos données personnelles et votre vie privée. La présente politique de confidentialité vous informe sur la façon dont nous recueillons, utilisons et protégeons vos données lorsque vous visitez notre site web ou utilisez nos services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Collecte des données personnelles</h2>
              <p>
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Informations d'identification (nom, prénom, adresse email, numéro de téléphone)</li>
                <li>Informations professionnelles (entreprise, fonction)</li>
                <li>Données de connexion et de navigation</li>
                <li>Historique des demandes et des échanges avec notre service client</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Utilisation des données</h2>
              <p>
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Fournir, maintenir et améliorer nos services</li>
                <li>Traiter vos demandes et répondre à vos questions</li>
                <li>Vous envoyer des informations administratives et commerciales</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Prévenir la fraude et assurer la sécurité de nos services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Conservation des données</h2>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour répondre aux finalités pour lesquelles nous les avons collectées, notamment pour satisfaire aux exigences légales, comptables ou de déclaration.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Partage des données</h2>
              <p>
                Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nos prestataires de services qui nous aident à fournir nos services</li>
                <li>Nos partenaires commerciaux, avec votre consentement</li>
                <li>Les autorités publiques, lorsque la loi l'exige</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Vos droits</h2>
              <p>
                Conformément à la réglementation applicable, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : dpo@viadex.fr
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération et la destruction.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Modifications de la politique de confidentialité</h2>
              <p>
                Nous pouvons modifier cette politique de confidentialité à tout moment. La version la plus récente sera toujours disponible sur notre site web avec la date de dernière mise à jour.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact</h2>
              <p>
                Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter à :
              </p>
              <p className="mt-2">
                Viadex<br />
                1, la péchardrie<br />
                35760 Saint-Grégoire<br />
                Email : contact@viadex.fr<br />
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Confidentialite;
