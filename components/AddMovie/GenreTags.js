const GenreTags = (props) => (
    <div className="mb-3 mt-2 flex overflow-auto">
            {props.tags.map((tag, index) => (
                <li className="list-none border-2 border-gray-300 rounded p-1 ml-1 mr-1 w-30 h-9" key={index}>
                    <span>{tag}</span>
                    {props.removeTags &&
                    <i
                        className="cursor-pointer bg-gray-200 border-2 rounded ml-1"
                        onClick={() => props.removeTags(index)} 
                    >X</i>}
                </li>
            ))}
            </div>
)

export default GenreTags