import styled from 'styled-components';

export const Sidebar = styled.div`{isActive}
    flex-direction: column;
    position: fixed;
    align-self: flex-start;
    min-height: 100vh;
    width: ${(props) => props.isActive ? '260px' : '0px'};
    visibility: ${(props) => props.isActive ? 'visible' : 'hidden'};
    flex-shrink: 0;
    background-color:grey;
    color: white;
    height: 100%;
    overflow: auto;
    transition: all 0.5s;
    
`

export const SideBarContainer = styled.div`
    flex-direction:column;
    position:fixed;
    align-self: flex-start;
`

export const IconContainer = styled.div`
    margin:24px;
`
export const SideBarContent = styled.div`{isActive}
    cursor: pointer;
    position: fixed; 
    visibility: ${(props) => props.isActive ? 'visible' : 'hidden'};
    transition-delay: 0.15s;
`