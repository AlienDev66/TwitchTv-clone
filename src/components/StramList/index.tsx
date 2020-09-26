import React from "react";
import streamThumbnail from "../../images/stream_thumbnail.jpg";
import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamCollumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory,
} from "./styles";

const StramList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamCollumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>
              alienshikadai_official
            </StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            FullStack Developer - Whith ReactJs, React Native and NodeJs.
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamCollumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StramList;
