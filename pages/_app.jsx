import React from 'react'
import '../style/global.css';
import 'antd/dist/antd.css'; 
 const App = ({ Component, pageProps }) => {
        return (
            <Component {...pageProps} />
        )
};
export default App;
