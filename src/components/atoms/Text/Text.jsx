import styled from 'styled-components';

// TODO: Implement a more sophisticated "Text" component with style, weight, and html tag variants

export const Headline = styled('span')({
  color: (props) => props.theme.colors.headers,
  fontSize: (props) => props.theme.text.headline.fontSize,
});

export const Body = styled('span')({
  fontSize: (props) => props.theme.text.body.fontSize,
});

export const Info = styled('span')({
  fontSize: (props) => props.theme.text.info.fontSize,
});
