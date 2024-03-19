import {keyframes, styled} from 'styled-components'
import { COLORS } from '../constants'

const pulse = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(1.15);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
`

const MetronomeRing = styled.div`
    width: 150px;
    height: 150px;
    border: 10px solid ${COLORS.PRIMARY};
    border-radius: 50%;
    background: ${COLORS.TERTIARY};

    //Another solution would be to remove these next four lines,
    //then remove the translate(-50%, -50%) from the keyframes.
    //But for now I will leave it like this
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    animation-name: ${({$isPulsing}) => ($isPulsing ? pulse : 'none')};
    animation-duration: 1s;
    
`


export default MetronomeRing