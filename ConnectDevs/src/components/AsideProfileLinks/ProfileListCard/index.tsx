import React from 'react';
import { ILinkCardProps } from '../../../providers/ProfileContext/@types';

export const LinkCard = ({ card }: ILinkCardProps) => (
  <li>
    <h2>{card.link}</h2>
  </li>
);
