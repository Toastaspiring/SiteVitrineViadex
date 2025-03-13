
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-primary">Politique de Cookies</h1>
          
          <div className="space-y-6 text-secondary">
            <section>
              <p className="italic">
                Dernière mise à jour : 1er juin 2023
              </p>
              <p className="mt-4">
                Cette politique de cookies explique ce que sont les cookies, comment Viadex les utilise, et quels sont vos choix concernant les cookies.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Qu'est-ce qu'un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte qui est stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés par les propriétaires de sites web pour faire fonctionner leurs sites, ou pour les faire fonctionner plus efficacement, ainsi que pour fournir des informations.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">2. Comment utilisons-nous les cookies ?</h2>
              <p>
                Nous utilisons différents types de cookies pour les raisons suivantes :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Cookies essentiels</strong> : Ces cookies sont nécessaires au fonctionnement du site. Ils vous permettent de naviguer sur notre site et d'utiliser ses fonctionnalités.</li>
                <li><strong>Cookies de performance</strong> : Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant des informations de manière anonyme. Ils nous permettent d'améliorer continuellement notre site.</li>
                <li><strong>Cookies de fonctionnalité</strong> : Ces cookies permettent à notre site de mémoriser les choix que vous faites (comme votre nom d'utilisateur, votre langue ou la région où vous vous trouvez) et de fournir des fonctionnalités améliorées et plus personnelles.</li>
                <li><strong>Cookies de ciblage ou publicitaires</strong> : Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts. Ils sont également utilisés pour limiter le nombre de fois que vous voyez une publicité ainsi que pour aider à mesurer l'efficacité des campagnes publicitaires.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">3. Quels cookies utilisons-nous ?</h2>
              <p>
                Voici les cookies spécifiques que nous utilisons sur notre site :
              </p>
              <table className="w-full mt-2 border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-primary/20 p-2 text-left">Nom du cookie</th>
                    <th className="border border-primary/20 p-2 text-left">Finalité</th>
                    <th className="border border-primary/20 p-2 text-left">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-primary/20 p-2">_ga</td>
                    <td className="border border-primary/20 p-2">Utilisé par Google Analytics pour distinguer les utilisateurs</td>
                    <td className="border border-primary/20 p-2">2 ans</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-2">_gid</td>
                    <td className="border border-primary/20 p-2">Utilisé par Google Analytics pour distinguer les utilisateurs</td>
                    <td className="border border-primary/20 p-2">24 heures</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-2">cookie_consent</td>
                    <td className="border border-primary/20 p-2">Enregistre vos préférences concernant les cookies</td>
                    <td className="border border-primary/20 p-2">1 an</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-2">session_id</td>
                    <td className="border border-primary/20 p-2">Maintient votre session utilisateur</td>
                    <td className="border border-primary/20 p-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">4. Comment gérer vos cookies ?</h2>
              <p>
                Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé. Cependant, si vous n'acceptez pas les cookies, il est possible que certaines fonctionnalités de notre site ne fonctionnent pas correctement.
              </p>
              <p className="mt-2">
                Voici comment gérer les cookies dans les navigateurs les plus courants :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Chrome</strong> : Menu &gt; Paramètres &gt; Afficher les paramètres avancés &gt; Confidentialité &gt; Paramètres de contenu</li>
                <li><strong>Firefox</strong> : Menu &gt; Options &gt; Vie privée &gt; Historique</li>
                <li><strong>Internet Explorer</strong> : Menu &gt; Options Internet &gt; Confidentialité</li>
                <li><strong>Safari</strong> : Préférences &gt; Confidentialité</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">5. Modifications de notre politique de cookies</h2>
              <p>
                Nous pouvons mettre à jour notre politique de cookies de temps à autre. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
              <p>
                Si vous avez des questions concernant notre politique de cookies, veuillez nous contacter à :
              </p>
              <p className="mt-2">
                Viadex<br />
                123 Rue de l'Innovation<br />
                75001 Paris<br />
                Email : privacy@viadex.fr<br />
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

export default Cookies;
