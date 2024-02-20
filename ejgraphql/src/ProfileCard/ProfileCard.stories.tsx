import ProfileCard from "./ProfileCard";
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
    component: ProfileCard,
    title: 'components/ProfileCard',
    tags: ['autodocs'],
    args: {
        name: 'Lucía',
        email: 'lucia@gmail.com',
        department: 'desarrollo',
        active: true,
        bgColor: 'dodgerblue'
    }
}

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Active: Story = {
    args: {
        active: true
    }
}

export const NoActive: Story = {
    args: {
        active: false
    }
}