'use client';
type InforecProps = {
    ordre : string
    dateform : string
    nomlv : string
    typerec : string
}

export default function Inforec({ordre , dateform , nomlv, typerec} :InforecProps) {
  return (
    <div>
        <div className="l3">
        <div>N° ordre:{ordre}</div>
        <div>Date:{dateform}</div>
        <div>Lieu de vote:{nomlv}</div>
        </div>
        <div className="l4">
        <div className="container">(1)Type de réclamation:</div>
        <div className="container">
            <p>{typerec}</p>
        </div>
        </div>
    </div>
  )
}

