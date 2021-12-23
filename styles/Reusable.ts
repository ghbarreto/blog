import styled from 'styled-components';
import * as utilities from './utilities';

interface ButtonProps {
  padding?: string;
  fontSize?: string;
  paddingLeft?: string;
  margin?: string;
  hoverBg?: string | undefined;
  bgColor?: string;
  primary?: boolean;
  color?: string | null;
  maxWidth?: string | null;
  marginTop?: string | null;
}

export const Container = styled.body`
  background-color: ${utilities.lightblue};
  height: 100vh;
  font-family: 'Fira Code', monospace;
  color: white;
`;

export const Button = styled.a<ButtonProps>`
  background-color: ${props => props.bgColor || utilities.lightblue};
  border-radius: 120px;
  padding: ${props => props.padding || '15px'};
  font-size: ${props => props.fontSize || '16px'};
  padding-left: ${props => props.paddingLeft || '0px'};
  margin: ${props => props.margin || '0px'};
  color: ${props => props.color || 'white'};
  max-width: ${props => props.maxWidth || undefined};
  margin-top: ${props => props.marginTop || undefined}

  &:hover {
    cursor: ${props => props.hoverBg && 'pointer'};
    text-align: center;
  }
`;

export const Tags = styled.span<ButtonProps>`
  color: ${props => (props.primary ? utilities.highlight : utilities.yellow)};
  font-size: ${props => props.fontSize || '16px'};
`;
