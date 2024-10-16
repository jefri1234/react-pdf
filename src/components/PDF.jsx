import React from 'react'
import { Document, Text, Page, StyleSheet, Image, View } from '@react-pdf/renderer'
import boy from '../boy.jpeg'

const styles = StyleSheet.create({
  titulo: {
    padding: 20,
    textAlign: 'center',
    fontSize:30,
  },
  imagen: {
    width: 200,
    height: 200
  },
  contenedor: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    width:100
  },
  parrafo: {
    fontSize: 20,
    padding: 20
  }
});


const datos =
{
  title: 'Como convertirse disciplinado',
  descripcion: 'La disciplina es un hábito que cada persona genera con base a su compromiso y autocontrol sumando también el comportamiento y personalidad que tenga cada uno, ya que como individuos planificamos, definimos nuestros objetivos y metas y así mismo diseñamos el paso a paso para poder lograrlos.',
}


function PDF() {
  return (
    <Document>
      <Page size='A4'>
        <Text style={styles.titulo}>{datos.title}</Text>
        <View style={styles.contenedor}>
          <Image src={boy} style={styles.imagen} />
          <Text>
            {datos.descripcion}
          </Text>
        </View>
        <Text style={styles.parrafo}>
          {datos.descripcion}
        </Text>
      </Page>
    </Document>
  )
}

export default PDF