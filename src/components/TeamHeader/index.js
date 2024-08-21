import './TeamHeader.css'

const TeamHeader = (props) => {
    const style = { 
        backgroundColor: props.secondaryColor
    }

    return (
        <section className='team-header' style={style}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        </section>
    )
}

export default TeamHeader