const Book = ({data}) => {
    let dataSection = [];
    for (const key of Object.keys(data)) {
        if (key.toString().toLowerCase() === 'published') data[key] = new Date(data[key]).toDateString();
        dataSection.push({desc: key.toString().toUpperCase(), data: data[key]});
    }

    return (
        <div key={data.isbn} className="card">
            <h5 className="card-header">{data.title}</h5>
            <div className="card-body">
            <h5>{data.subtitle}</h5>
                <div className="card-text">
                    <table className="table">
                        <tbody>
                            {dataSection.map((section, index) => <BookPart index={index} desc={section.desc} data={section.data} isbn={data.isbn}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
const BookPart = (section) => {
    return (
        <tr key={`${section.isbn}_${section.index}`}>
            <td className="text-success font-weight-bold">{`${section.desc}:`}</td>
            {section.desc === 'WEBSITE'
            ? <td><a href={section.data}>{section.data}</a></td>
            : <td>{section.data}</td>
            }
        </tr>
    )
}