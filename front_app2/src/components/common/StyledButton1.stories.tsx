import type { Meta, StoryObj } from '@storybook/react'

import StyledButton1 from './StyledButton1'

const meta: Meta<typeof StyledButton1> = {
    title: "Components/common/StyleButton1",
    component: StyledButton1
}

export default meta;

type Story = StoryObj<typeof StyledButton1>

export const Primary: Story = {
    render: () => <StyledButton1>Primary</StyledButton1>
}