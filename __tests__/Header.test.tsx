import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Header } from "../src/components/Header";
import { useNavigation } from '@react-navigation/native';

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));
const goBack = jest.fn();
(useNavigation as jest.Mock).mockReturnValue({ goBack });


describe('Header component', () => {

  it('Should render Header container', () => {
    render(<Header />);
    const container = screen.getByTestId('header-container');
    expect(container).toBeOnTheScreen();
  })

  it('Should alway render BackButton', () => {
    render(<Header />);
    expect(screen.getByTestId('back-button')).toBeOnTheScreen();
  })

  it('Should render title on Header', () => {
    render(<Header title="Character Details" />);
    expect(screen.getByText('Character Details')).toBeOnTheScreen();
  })
})