import _ from 'lodash';
import React from 'react';
import { Box, Container, Section } from '../components';

export const Align = () => {
  const renderText = () => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  };

  const renderBoxes = ({ height = 32, width = 64, count = 5 } = {}) => {
    const boxes = _.times(count, (i) => (
      <React.Fragment key={i}>
        <Box className="" height={height} width={width} />
      </React.Fragment>
    ));
    return <React.Fragment>{boxes}</React.Fragment>;
  };

  return (
    <Container name="align">
      <Section className="align-items-equally">{renderBoxes()}</Section>
      <Section className="align-items-flow">{renderBoxes({ width: '40%' })}</Section>
      <Section className="align-items-flow align-items-flow--nowrap">
        {renderBoxes({ width: '40%' })}
      </Section>

      <Section className="flex-align-start" style={{ height: '60px' }}>
        {renderBoxes({ width: 'auto', height: 'auto' })}
      </Section>
      <Section className="flex-align-end" style={{ height: '60px' }}>
        {renderBoxes({ width: 'auto', height: 'auto' })}
      </Section>
      <Section className="flex-align-center" style={{ height: '60px' }}>
        {renderBoxes({ width: 'auto', height: 'auto' })}
      </Section>
      <Section className="flex-align-stretch" style={{ height: '60px' }}>
        {renderBoxes({ width: 'auto', height: 'auto' })}
      </Section>

      <Section className="flex-justify-start" style={{ height: '60px' }}>
        {renderBoxes()}
      </Section>
      <Section className="flex-justify-end" style={{ height: '60px' }}>
        {renderBoxes()}
      </Section>
      <Section className="flex-justify-center" style={{ height: '60px' }}>
        {renderBoxes()}
      </Section>
      <Section className="flex-justify-space-between" style={{ height: '60px' }}>
        {renderBoxes()}
      </Section>

      <Section className="flex-row">{renderBoxes({ count: 3 })}</Section>
      <Section className="flex-column">{renderBoxes({ count: 3 })}</Section>

      <Section name="flex-grow" className="flex-column">
        <div className="flex-align-center">
          <Box height={32} width={64} margin={null} active className="flex-grow" />
          <Box height={32} width={64} margin={null} />
        </div>
        <div className="flex-align-center">
          <Box height={32} width={64} margin={null} />
          <Box height={32} width={64} margin={null} />
        </div>
      </Section>

      <Section className="text-align-center">{renderText()}</Section>
      <Section className="text-align-left">{renderText()}</Section>
      <Section className="text-align-right">{renderText()}</Section>
    </Container>
  );
};
