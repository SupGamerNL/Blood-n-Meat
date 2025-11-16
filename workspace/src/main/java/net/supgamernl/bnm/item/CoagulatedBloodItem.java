package net.supgamernl.bnm.item;

import net.minecraft.world.item.Item;
import net.minecraft.world.food.FoodProperties;

public class CoagulatedBloodItem extends Item {
	public CoagulatedBloodItem(Item.Properties properties) {
		super(properties.food((new FoodProperties.Builder()).nutrition(1).saturationModifier(0.1f).alwaysEdible().build()));
	}
}