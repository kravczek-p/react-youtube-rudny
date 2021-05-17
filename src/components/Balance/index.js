const Balance = ({balance, children}) => {
    return <div>
        {balance === 0?'++++++':'-------'}
        </div>
}


export default Balance;