import _ from 'lodash';
import React from 'react';
import { Box, Container, Section } from '../components';

export const Spacing = () => {
  return (
    <Container name="Spacing">
      <p>
        Most components and containers should have spacing built-in. If you need to construct a
        component, use the spacing variables to ensure consistency. Generally speaking, use $s8
        between related/grouped elements ($s16 if those elements are more substantial e.g. vertical
        space between large buttons) and $s24 between groups within a container. Use $s32 for most
        container vertical padding except for smaller cards that need to be tighter.
      </p>
      <ul>
        <li>$s8: 8px;</li>
        <li>$s10: 10px;</li>
        <li>$s12: 12px;</li>
        <li>$s14: 14px;</li>
        <li>$s16: 16px;</li>
        <li>$s20: 20px;</li>
        <li>$s24: 24px;</li>
        <li>$s32: 32px;</li>
        <li>$s40: 40px;</li>
      </ul>
      <Section
        name="spaceRight, spaceRight--small, spaceRight--large"
        className="flex-align-center"
      >
        <Box height={32} width={64} margin={null} active className="spaceRight--small" />
        <Box height={32} width={64} margin={null} active className="spaceRight" />
        <Box height={32} width={64} margin={null} active className="spaceRight--large" />
        <Box height={32} width={64} margin={null} />
      </Section>
      <Section name="spaceLeft, spaceLeft--small, spaceLeft--large" className="flex-align-center">
        <Box height={32} width={64} margin={null} />
        <Box height={32} width={64} margin={null} active className="spaceLeft--small" />
        <Box height={32} width={64} margin={null} active className="spaceLeft" />
        <Box height={32} width={64} margin={null} active className="spaceLeft--large" />
      </Section>
      <Section name="spaceBottom, spaceBottom--small, spaceBottom--large" className="flex-column">
        <Box height={32} width={64} margin={null} active className="spaceBottom--small" />
        <Box height={32} width={64} margin={null} active className="spaceBottom" />
        <Box height={32} width={64} margin={null} active className="spaceBottom--large" />
        <Box height={32} width={64} margin={null} />
      </Section>
      <Section name="spaceTop, spaceTop--small, spaceTop--large" className="flex-column">
        <Box height={32} width={64} margin={null} />
        <Box height={32} width={64} margin={null} active className="spaceTop--small" />
        <Box height={32} width={64} margin={null} active className="spaceTop" />
        <Box height={32} width={64} margin={null} active className="spaceTop--large" />
      </Section>
    </Container>
  );
};
