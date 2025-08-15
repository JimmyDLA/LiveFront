import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { Button } from "../src/components/Button";

const onPress = jest.fn();


describe('Button component', () => {

  it('Should render Button', () => {
    render(<Button onPress={onPress} title="Next" />);
    const button = screen.getByTestId('primary-button');
    expect(button).toBeOnTheScreen();
  })

  it('Should call onPress when pressed', () => {
    render(<Button onPress={onPress} title="Next" />);
    const button = screen.getByTestId('primary-button');
    fireEvent.press(button);
    expect(button).toHaveTextContent('Next')
  })

  it('Should render loading state', () => {
    render(<Button onPress={onPress} title="Next" loading />);
    const loadingIndicator = screen.getByTestId('loading');
    expect(loadingIndicator).toBeOnTheScreen();
  })
})