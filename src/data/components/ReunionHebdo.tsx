import Hover from "@/components/hover";

export default function ReunionHebdo() {
    return (
        <div>
            <p>
                Veuillez noter la date de la prochaine réunion hebdomadaire : Elle aura lieu ce jeudi à 15h30, en présence de David LERGY, directeur de la branche.
            </p>
            <Hover title="https://teams.microsoft.com/join/reunion-hebdomadaire-kernaval">
                <a className="underline text-cyan-700">Rejoindre sur Teams</a>
            </Hover>
            <p>
                <br/>
                --
                <br/>
                Alice Dumas
                <br/>
                Kernaval
            </p>
        </div>
    )
}