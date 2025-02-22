import { Image } from "expo-image";

// // using asycn storage (does not work with android properly: disk space is low)
// export const CachedImage = (props) => {
//     const [cachedSource, setCachedSource] = useState(null);
//     const { uri } = props;

//     useEffect(() => {
//       const getCachedImage = async () => {
//         try {
//           const cachedImageData = await AsyncStorage.getItem(uri);
//           if (cachedImageData) {
//             setCachedSource({ uri: cachedImageData });
//           } else {
//             const response = await fetch(uri);
//             const imageBlob = await response.blob();
//             const base64Data = await new Promise((resolve) => {
//               const reader = new FileReader();
//               reader.readAsDataURL(imageBlob);
//               reader.onloadend = () => {
//                 resolve(reader.result);
//               };
//             });
//             await AsyncStorage.setItem(uri, base64Data);
//             setCachedSource({ uri: base64Data });
//           }
//         } catch (error) {
//           console.error('Error caching image:', error);
//           setCachedSource({uri});
//         }
//       };

//       getCachedImage();
//     }, []);

//     return <Animated.Image source={cachedSource} {...props} />;
//   };

export const CachedImage = (props) => {
  const { uri } = props;

  return <Image source={uri} {...props} />;
};
