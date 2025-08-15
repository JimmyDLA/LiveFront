import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { BackButton, styles } from "../src/components/BackButton";
import { useNavigation } from '@react-navigation/native';

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));
const goBack = jest.fn();


describe('BackButton component', () => {
  it('Should render BackButton', () => {
    render(<BackButton />);
    const button = screen.getByTestId('back-button');
    expect(button).toBeOnTheScreen();
  })

  it('Should call navigation.goBack() when pressed', () => {
    (useNavigation as jest.Mock).mockReturnValue({ goBack });
    render(<BackButton />);
    const button = screen.getByTestId('back-button');
    fireEvent.press(button);
    expect(goBack).toHaveBeenCalled()
  })

  it('Should render non-Header style', () => {
    render(<BackButton isHeader={false} />);
    const button = screen.getByTestId('back-button');
    expect(button).toHaveStyle(styles.nonHeader);
  })
})