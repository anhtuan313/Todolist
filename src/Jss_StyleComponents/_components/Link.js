import styled from "styled-components";

export const Link = ({className,children,...restProps}) => (
    <a  className={className}>
        {children}
    </a>
)

export const StyleLink = styled(Link)`
    color: orange;
    font-weight: bold;
`
     


