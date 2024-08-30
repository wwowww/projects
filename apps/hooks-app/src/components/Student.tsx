type Props = {
  name: string;
  dispatch: any;
  id: number | string;
  isHere: boolean;
}

const Student = ({name, dispatch, id, isHere}: Props) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black'
        }}
        onClick={() => {
          dispatch({type: 'mark', payload: {id}})
        }}
      >{name}</span>
      <button
        onClick={() => {
          dispatch({type: 'delete', payload: {id}})
        }}
      >삭제</button>
    </div>
  )
}

export default Student;