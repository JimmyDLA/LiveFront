import React from "react";
import { render, screen } from "@testing-library/react-native";
import { CharacterDetail } from "../src/components/CharacterDetail";
import { mockCharacter } from "../src/types/types";

describe('CharacterDetail component', () => {

  it('Should render CharacterDetail with all details', () => {
    render(<CharacterDetail character={mockCharacter} />);
    const checkText = (text: string) => screen.getByText(text);
    
    expect(checkText(mockCharacter.name)).toBeOnTheScreen();
    expect(checkText(`🔴 ${mockCharacter.status}`)).toBeOnTheScreen();
    expect(checkText(mockCharacter.origin.name)).toBeOnTheScreen();
    expect(checkText(mockCharacter.species)).toBeOnTheScreen();
  })

  it('Should render image and correct source', () => {
    render(<CharacterDetail character={mockCharacter} />);
    const image = screen.getByTestId('image');
    expect(image).toBeOnTheScreen();
    expect(image.props.source.uri).toBe(mockCharacter.image);
  })
})