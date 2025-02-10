import Hover from "@/components/hover";

export default function Antai() {
    return (
        <div className="text-center">
            <a>|ne_pas_repondre@antai.gouv.fr|</a>
            <Hover title="https://www.antai.gouv.fr/themes/open_antai_swa/antai_logo.png">
                <img className="max-h-48 mx-auto" alt="ANTAI LOGO RF" src="https://www.antai.gouv.fr/themes/open_antai_swa/antai_logo.png" />
            </Hover>
            <p className="mb-4">Bonjour victor.marchand@kernaval.com,</p>
            <p className="mb-4">
                Vous avez une (1) nouvelle alerte de la part de l'Agence Nationale<br/>
                de Traitement Automatisé des Insfractions. Veuillez consulter immédiatement<br/>
                votre dossier via le bouton ci-dessous:
            </p>
            <Hover title="https://ghj.vg/oFggx">
                <a className="mb-4 underline text-cyan-700" href="https://ghj.vg/oFggx">Consulter mon dossier (1)*</a>
            </Hover>
            <p className="mb-4">
                NB: Le non respect de cet avis pourraît entrainer des frais et pénalités.<br/>
                Ceci est un message automatique. Veuillez ne pas y répondre.
            </p>
            <Hover title="https://www.automobile-magazine.fr/asset/cms/840x394/172101/config/120900/avis-contravention-permis-carte-grise-600.jpg">
                <img className="max-h-48 mx-auto" src="https://www.automobile-magazine.fr/asset/cms/840x394/172101/config/120900/avis-contravention-permis-carte-grise-600.jpg" />
            </Hover>
        </div>
    )
}