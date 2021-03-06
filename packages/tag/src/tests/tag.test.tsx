import * as React from "react"
import { render } from "@chakra-ui/test-utils"
import { AddIcon } from "@chakra-ui/icons"
import { Tag, TagLeftIcon, TagLabel, TagCloseButton } from ".."

test("Tag renders correctly", () => {
  const { asFragment } = render(
    <>
      <Tag>A</Tag>
      <Tag>
        <TagLabel>B</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag>
        <TagLeftIcon as={AddIcon} />
        <TagLabel>C</TagLabel>
        <TagCloseButton />
      </Tag>
    </>,
  )
  expect(asFragment()).toMatchSnapshot()
})
