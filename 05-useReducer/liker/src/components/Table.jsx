const Table = () => {
    const backendUsers = "https://retoolapi.dev/jr8663/liker"
    
  return (
    <table>
        <thead>
            <tr>    
                <th>Felhasználó neve</th>
                <th>Kedvelés mértéke</th>
                </tr>
        </thead>
        <tbody> 
            {/* Ide jönnek a felhasználók sorai */}
        </tbody>
    </table>
  )
}

export default Table