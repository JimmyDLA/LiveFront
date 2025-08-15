import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { CharacterTile } from "../src/components/CharacterTile";
import { mockCharacter } from "../src/types/types";
import { useNavigation } from '@react-navigation/native';

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));
const mockNavigate = jest.fn();
(useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

describe('CharacterTile component', () => {

  it('Should have a touchable container', () => {
    render(<CharacterTile character={mockCharacter} />);
    expect(screen.getByTestId('tile-button')).toBeOnTheScreen();
  })

  it('Should render CharacterTile image and correct source', () => {
    render(<CharacterTile character={mockCharacter} />);
    const image = screen.getByTestId('image');
    expect(image).toBeOnTheScreen();
    expect(image.props.source.uri).toBe(mockCharacter.image);
  })

  it('Should navigate to next screen', () => {
    render(<CharacterTile character={mockCharacter} />);
    
    fireEvent.press(screen.getByTestId('tile-button'));
    expect(mockNavigate).toHaveBeenCalled();
  })
})