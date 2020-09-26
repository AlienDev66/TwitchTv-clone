import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StramList from "../../components/StramList";
import ChannelList from "../../components/ChannelList";

import { Container, Wrapper, Main } from "./styles";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indicies } = useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: "C1",
        render: () => <CategoryList />,
      },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: "C2",
        render: () => <StramList />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: "C3",
        render: () => <StramList />,
      },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <Title>Offline Channel</Title>,
        isTitle: true,
      },
      {
        key: "C4",
        render: () => <ChannelList />,
      },
    ];

    // Array que contém apenas os índeces dos elementos que são títulos.
    const indicies: number[] = [];

    items.forEach((item, index) => {
      item.isTitle && indicies.push(index);
    });

    return {
      data: items,
      indicies,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indicies}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
