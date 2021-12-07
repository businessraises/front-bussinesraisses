import Coment from "./Coment"

const ListComent = ({ data, idUserGlobal, setState, state }) => {
  /* data es un arreglo de todos los comentarios relacionados con el usuario, por medio de un filter
    obtenemos el arreglo de los comentarios relacionados con la publicación
  */

  return (
    <Coment autor={data.ownerName} comentario={data.comment} idUserActive={idUserGlobal} idOwner={data.userId} idComment={data.id} setState={setState} state={state} />
  )
}

export default ListComent
