import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';

export default function App() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(StatusBar, { style: 'light' }),
    React.createElement(
      View,
      { style: styles.header },
      React.createElement(Text, { style: styles.headerTitle }, 'I Am Rich')
    ),
    React.createElement(
      View,
      { style: styles.content },
      React.createElement(
        View,
        { style: styles.imageContainer },
        React.createElement(Image, {
          source: require('./assets/diamond.png'),
          style: styles.image,
          resizeMode: 'contain',
        })
      ),
      React.createElement(Text, { style: styles.title }, 'I Am Rich')
    ),
    React.createElement(
      View,
      { style: styles.footer },
      React.createElement(Text, { style: styles.studentInfo }, 'Nguyễn Anh Tuấn - 23IT297')
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0,
  },
  header: {
    height: 56,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F8FAFC',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
  },
  image: {
    width: 240,
    height: 240,
    maxWidth: '80%',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  studentInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
});
