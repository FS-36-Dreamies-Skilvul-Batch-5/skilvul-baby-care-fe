import { useParams } from "react-router-dom"

export default function DetailArticle(){
  const { id } = useParams()

  return(
    <>
      <div>
        <h1 className="text-3xl font-bold text-sky-500">Detail Article Page dengan Id: {id}</h1>
      </div>
    </>
  )
}