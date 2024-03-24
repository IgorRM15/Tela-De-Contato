import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Contact {
  id: number;
  name: string;
  status: string;
}

const contacts: Contact[] = [
  { id: 1, name: 'Mayke', status: 'Disponível' },
  { id: 2, name: 'Igor', status: 'Ocupado' },
  { id: 3, name: 'Luis', status: 'Offline' },
  // Adicione mais contatos conforme necessário
];

const ContactList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>
      {contacts.map((contact) => (
        <TouchableOpacity key={contact.id} style={styles.contactContainer}>
          <View style={styles.contact}>
            <Text style={styles.contactName}>
              <Ionicons name="person" size={24} color="#400096" style={{ marginRight: 10 }} />
              {contact.name}
            </Text>
            <Text style={styles.contactStatus}>{contact.status}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d7ff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#400096',
    marginBottom: 20,
  },
  contactContainer: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    color: '#21212f',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactStatus: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactList;
