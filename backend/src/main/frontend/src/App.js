import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [back, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/test')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            정상 작동중이니 나가주세요 : {back}
        </div>
    );
}

export default App;