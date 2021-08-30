import React from 'react';
import { Image } from 'react-native';

export default function ProductImage({img_url}) {
    return (
        <Image
        style={{ borderRadius: 10, resizeMode: "contain" }}
        source={{
          uri: img_url,
          height: 150,
          width: 150,
        }}
      />
    )
}