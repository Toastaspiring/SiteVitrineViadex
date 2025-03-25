
import { Link } from "react-router-dom";

const FormationHeader = () => {
  return (
    <section className="bg-primary text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Formation CertifIAG</h1>
        <div className="flex items-center gap-2 text-2xl md:text-2xl font-semibold mb-2">
          <p>Maîtrisez l'IA Générative avec discernement grâce à la certification CertifIAG</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-gray-300 text-[1.1rem] tracking-wide italic gap-4">
          <div className="flex gap-4 items-center">
            <div className="bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
              <img src="lovable-uploads/partenaire/justAi.png" alt="Just IA Logo" className="w-12 h-12 object-contain" />
            </div>
            <div className="bg-white rounded-full p-2 w-16 h-16 flex items-center justify-center">
              <img src="lovable-uploads/partenaire/certifopac.png" alt="CertifOpac Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>
          <span className="mt-2 sm:mt-0"><strong>Formation CertifOpac en partenariat avec Just IA</strong></span>
        </div>
      </div>
    </section>
  );
};

export default FormationHeader;
