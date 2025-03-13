
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-primary">Conditions d'Utilisation</h1>
          
          <div className="space-y-6 text-secondary">
            <section>
              <p className="italic">
                Dernière mise à jour : 1er juin 2023
              </p>
              <p className="mt-4">
                Bienvenue sur le site web de Viadex. En accédant à ce site, vous acceptez de vous conformer aux présentes conditions d'utilisation et de les respecter. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Utilisation du site</h2>
              <p>
                L'utilisation de ce site est soumise aux présentes conditions d'utilisation. En utilisant ce site, vous reconnaissez avoir pris connaissance de ces conditions et les accepter.
              </p>
              <p className="mt-2">
                Vous vous engagez à utiliser ce site conformément aux lois et règlements en vigueur et aux présentes conditions d'utilisation. En particulier, vous vous engagez à ne pas utiliser ce site à des fins illicites ou interdites.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Contenu du site</h2>
              <p>
                Les informations présentes sur ce site sont fournies à titre informatif uniquement. Nous nous efforçons de fournir des informations exactes et à jour, mais nous ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence des informations diffusées sur le site.
              </p>
              <p className="mt-2">
                Nous nous réservons le droit de modifier le contenu du site à tout moment et sans préavis. Nous ne pourrons être tenus responsables des conséquences de ces modifications.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Propriété intellectuelle</h2>
              <p>
                Tous les éléments du site (textes, images, logos, vidéos, sons, etc.) sont protégés par le droit d'auteur, le droit des marques et le droit des brevets.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Viadex.
              </p>
              <p className="mt-2">
                Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites internet. Nous n'avons pas la possibilité de vérifier le contenu de ces sites, et nous n'assumons aucune responsabilité quant à leur contenu.
              </p>
              <p className="mt-2">
                La création de liens hypertextes vers notre site est soumise à notre accord préalable. Dans tous les cas, nous nous réservons le droit de demander la suppression d'un lien si nous l'estimons non conforme à notre politique.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Limitation de responsabilité</h2>
              <p>
                Nous nous efforçons de maintenir le site accessible en permanence, mais nous ne sommes tenus à aucune obligation de résultat. Nous ne pourrons être tenus responsables des dommages directs ou indirects résultant de l'utilisation du site.
              </p>
              <p className="mt-2">
                Nous déclinons toute responsabilité quant aux éventuels virus qui pourraient infecter votre ordinateur ou tout autre matériel informatique à la suite de votre utilisation de notre site.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes conditions d'utilisation sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">7. Modifications des conditions d'utilisation</h2>
              <p>
                Nous nous réservons le droit de modifier les présentes conditions d'utilisation à tout moment. La version la plus récente sera toujours disponible sur notre site web avec la date de dernière mise à jour.
              </p>
              <p className="mt-2">
                Votre utilisation continue du site après la publication des conditions d'utilisation modifiées signifie que vous acceptez ces modifications.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">8. Contact</h2>
              <p>
                Pour toute question concernant les présentes conditions d'utilisation, vous pouvez nous contacter à l'adresse suivante :
              </p>
              <p className="mt-2">
                Viadex<br />
                123 Rue de l'Innovation<br />
                75001 Paris<br />
                Email : contact@viadex.fr<br />
                Téléphone : +33 1 23 45 67 89
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConditionsUtilisation;
