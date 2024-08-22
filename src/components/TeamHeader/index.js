import './TeamHeader.css'
import Card from '../Card'

const TeamHeader = (props) => {
    const style = {
        backgroundColor: props.secondaryColor
    }

    return (
        (props.collaborators.length > 0) && <section className='team-header' style={style}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
            {props.collaborators.map(
                collaborator => <Card
                    key={collaborator.name}
                    name={collaborator.name}
                    role={collaborator.role}
                    img={collaborator.image}
                    primaryColor={props.primaryColor}
                />)}
            </div>
        </section>
    )
}

export default TeamHeader