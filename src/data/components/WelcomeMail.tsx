import Hover from "@/components/hover";
import { Button } from "@/components/ui/button";

export default function WelcomeMail() {
    return (
        <div className="bg-cyan-500 p-24 w-100">
            <div className="text-center max-w-lg mx-auto bg-background rounded-xl p-6">
                <img src='/kernaval.jpg' className="w-64 h-64 mx-auto" />
                <p>
                    Bienvenue Victor, découvrez votre nouvel environnement professionnel dans le port de Kernaval. 
                    Nous sommes ravis de vous accueillir parmi nous et sommes convaincus que vous allez vous épanouir 
                    dans ce nouveau travail.
                </p>
                <p className="my-4 font-bold">
                    Signez dès à présent la charte informatique de l'entreprise. Nous vous signalons que les 
                    campagnes de phishing sont fréquentes et vous invitons à rester vigilant.
                </p>
                <Hover title="https://intranet.kernaval.com/charte-informatique.pdf">
                    <Button>
                        Signer la charte
                    </Button>
                </Hover>
                <Hover title="https://intranet.kernaval.com/documentation-informatique.pdf">
                    <Button variant={"link"}>
                        Comment utiliser mon poste de travail
                    </Button>
                </Hover>
            </div>
        </div>
    )
}