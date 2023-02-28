import { useDispatch } from "react-redux";
import { useState } from "react";
import { asyncAddComment, asyncAddManyComments } from "../store/Reducer";

const Header = () => {
    const [name, setName] = useState('');
    const [email, setMail] = useState('');
    const [body, setText] = useState('');  

    const dispatch = useDispatch();

    const setDefaultOptions = () => {
        setName('');
        setMail('');
        setText('');
    }
    
    const submitEvent = (event) => {
        const isNameValid = name.length > 0;
        const isMailValid = email.length > 0 && email.includes('@') && !email.endsWith('@');;
        const isTextValid = body.length > 0;
        event.preventDefault();

        if (isNameValid && isMailValid && isTextValid) {
            const payload= {
                name,
                email,
                body,
                id: Date.now()
            };
            dispatch(asyncAddComment(payload))
            setDefaultOptions();
        }
    };

    return (
        <div>
            <div>Adding comment</div>
            <form className='info-container'>
                <div className='info-container_group'>
                    <label>Name</label>
                    <input className="input"
                        id='name'
                        type='text'
                        required='required'
                        value={name}
                        onChange={event => setName(event.target.value)}>
                    </input>
                </div>
                <div className='info-container_group'>
                    <label>e-mail</label>
                    <input
                        id='email'
                        type='mail'
                        required='required'
                        value={email}
                        onChange={event => setMail(event.target.value)}>
                    </input>
                </div>
                <div className='info-container_group'>
                    <label>comment</label>
                    <input
                        id='body'
                        type='text'
                        required='required'
                        value={body}
                        onChange={event => setText(event.target.value)}>
                    </input>
                </div>
                <input type="submit" value='Send' onClick={event => submitEvent(event)}/>
            </form>
            <button onClick={() => dispatch(asyncAddManyComments())}>Add many comments</button>
        </div>
    );
};

export default Header;