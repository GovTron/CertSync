
import {ResponsiveWebDrawer} from './ResponsiveWebDrawer.js';
// import { Draw } from '@mui/icons-material';

function CertificateComponent() {
    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}

export default function Certificates() {
    return (
        <>
            <ResponsiveWebDrawer certificateComponent={<CertificateComponent/>} settingsComponent={<CertificateComponent/>}></ResponsiveWebDrawer>
        </>
    );
}