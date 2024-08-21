import './Form.css'
import TextInput from '../TextInput';
import DropdownInput from '../DropdownInput';
import Button from '../Button';
import { useState } from 'react'



const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('Programação')

    const onSave = (event) => {
        event.preventDefault()
        props.onCollaboratorCreated({
            name: name,
            role: role,
            image: image,
            team: team
        })
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextInput 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={role}
                    onChange={role => setRole(role)}
                />
                <TextInput 
                    mandatory={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    onChange={image => setImage(image)}
                />
                <DropdownInput 
                    mandatory={true} 
                    label="Times" 
                    itens={props.teams}
                    value={team}
                    onChange={team => setTeam(team)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form